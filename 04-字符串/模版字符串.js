/**
 * Created by mon on 2016/11/3.
 */
let name = 'mm';
let str = `hello ${name}.
today is null`;
console.log(str);

//嵌套
let data = [
  {first:'mmm', second:'bb'},
  {first:'ccc', second:'dd'}
];
let temp = addrs => `
<table>
  ${addrs.map(addr => `
  <tr><td>${addr.first}</td></tr>
  <tr><td>${addr.second}</td></tr>`)}
</table>`
console.log(temp(data));