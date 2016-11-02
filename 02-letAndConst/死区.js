/**
 * Created by mon on 2016/11/2.
 */
// function bar(x = y, y = 1 ) {
//   return x + y;
// }
// console.log(bar());

function bar(x = 2, y = x ) {
  return x + y;
}
console.log(bar());