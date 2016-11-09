function a() {
  console.log('hello a');
}

function b() {
  console.log('hello b');
}

//way one
(async => Promise.all([a(), b()]))
