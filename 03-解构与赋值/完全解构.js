/**
 * Created by mon on 2016/11/3.
 */
let [a, [[b], c]] = [1, [[2], 3]];

let [, , d] = [1,2,3];
let [f, ...other] = [1,2,3,4];
console.log(other);
//...other如果没有值那么它的类型不是undefined,是array。

//Set解构
let [m,z,y] = new Set(['a', 'b', 'c']);
console.log(m + z + y);

//Generator解构
function *fibs() {
  var a = 0;
  var b = 1;
  while (true) {
    yield a;
    [a, b] = [a + b, a];
  }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth);