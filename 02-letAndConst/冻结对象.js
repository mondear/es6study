/**
 * Created by mon on 2016/11/3.
 */
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, value) => {
    if (typeof obj[key] == 'object') {
      constantize(obj[key]);
    }
  })
};

let obj = {
  name: 'name',
  age: 'age'
};

obj.name = 'bbb';
console.log(obj.name);

var cpObj = constantize(obj);

cpObj.name = 'ccc';