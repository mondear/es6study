//普通状态机
var ticking = true;
let clock = function() {
  if (ticking) {
    console.log('Tick');
  } else {
    console.log('Tock')
  }
  ticking = !ticking;
}

//generator形式
let gClock = function*() {
  while (true) {
    console.log('Tick');
    yield;
    console.log('Tock');
    yield;
  }
}
