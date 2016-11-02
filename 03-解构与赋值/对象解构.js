/**
 * Created by mon on 2016/11/3.
 */
//完全形式
var {foo:foo, bar:bar} = {foo:'size', bar:'bbb'};
//简写
var {foo, bar} = {foo:'size', bar:'bbb'};

//数值解构
let {toString: a} = 123;
console.log(a);