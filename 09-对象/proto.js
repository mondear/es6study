/**
 * Created by mon on 2016/11/3.
 */
//setprototype
let proto = {};
let obj = {x: 10};
Object.setPrototypeOf(obj, proto);
proto.y = 1;
proto.z = 5;
console.log(...[obj.x,obj.y,obj.z]);