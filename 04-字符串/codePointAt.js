/**
 * Created by mon on 2016/11/3.
 */
let fourCode = '\u{20bb7}a';
console.log(fourCode.codePointAt(0));
console.log(fourCode.codePointAt(1));
console.log(fourCode.charCodeAt(2));

//for of 遍历字符串
for (let ch of fourCode) {
  console.log(ch.codePointAt(0).toString());
}
//用codepointat测试32为字符
function test32bit(c) {
  return c.codePointAt(0) > 0xffff
}
console.log(test32bit('\u{20bb7}'));
console.log(test32bit('a'));

console.log(String.fromCodePoint(0x20bb7));