/**
 * Created by mon on 2016/11/3.
 */
function feth(url, {method = 'GET'} = {}) {
  console.log(method);
}

//可以省略第二个参数
feth('http:///');
feth('http...', {method : 'POST'});