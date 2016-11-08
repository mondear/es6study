const fs = require('fs');

function* readLine() {
  let file = FileReader('test.txt', 'w');
  while (!file.eof) {
    yield file.readline();
  }
  file.close();
}

let f = readLine();
f.next();
