/**
 * Created by mon on 2016/11/3.
 */
var [x = 1] = [undefined];
//x = 1

var [c = 1] = [null];
//c = null

let [x = y, y= 1] = [];
//报错