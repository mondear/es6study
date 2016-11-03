/**
 * Created by mon on 2016/11/3.
 */
let birth = '00/00/00';
var man = {
  name: 'mm',
  birth,
  hello(){
    console.log(`my name: ${this.name} and birth is ${birth}`);
  }
};

man.hello();

//返回对象
function getPoint() {
  let x = 1;
  let y = 2;
  return {x, y};
}

console.log(getPoint());