async function f() {
  return 'hello async';
}
f().then(v => console.log(v));
