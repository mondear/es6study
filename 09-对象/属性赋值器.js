/**
 * Created by mon on 2016/11/3.
 */
var getset = {
  _wheels: 4,
  get wheels() {
    return this._wheels;
  },
  set wheels(value) {
    this._wheels = value;
  }
};

console.log(getset.wheels);
getset.wheels = 10;
console.log(getset.wheels);