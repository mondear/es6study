/**
 * Created by mon on 2016/11/2.
 */
var a = [];
// var
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
console.log('var console: ');
a[6]();

//let
for (let z = 0; z < 10; z++) {
  a[z] = function () {
    console.log(z);
  };
}
console.log('let console:');
a[6]();
